import React, { useState, useEffect, useRef } from 'react';
import styles from './Muyu.module.css';
import { Link } from 'react-router-dom';  // 引入Link组件

function Muyu() {
    const [counter, setCounter] = useState(0);
    const [isHitting, setIsHitting] = useState(false);
    const [showBonus, setShowBonus] = useState(false);
    const [wishText, setWishText] = useState('功德 +1,漫天神佛保佑你');
    const [selectedWish, setSelectedWish] = useState('功德 + 1, 诸神保佑');
    const [customWish, setCustomWish] = useState('');
    const [wishDialogVisible, setWishDialogVisible] = useState(false);
    const [autoKnockDialogVisible, setAutoKnockDialogVisible] = useState(false);
    const [isAutoKnocking, setIsAutoKnocking] = useState(false);
    const [immersiveMode, setImmersiveMode] = useState(false);

    const bgMusicRef = useRef(null);
    const muyuSoundRef = useRef(null);
    const autoKnockTimerRef = useRef(null);

    const playMuyu = () => {
        if (isHitting) return;

        setCounter(prev => prev + 1);
        setShowBonus(true);
        setTimeout(() => setShowBonus(false), 1000);

        if (muyuSoundRef.current) {
            muyuSoundRef.current.currentTime = 0;
            muyuSoundRef.current.play().catch(error => console.error('音频播放失败: ', error));
        }

        setIsHitting(true);
        setTimeout(() => setIsHitting(false), 100);
    };

    const startAutoKnock = () => {
        if (isAutoKnocking) return;
        setIsAutoKnocking(true);
        autoKnockTimerRef.current = setInterval(playMuyu, 1200);
    };

    const stopAutoKnock = () => {
        if (!isAutoKnocking) return;
        setIsAutoKnocking(false);
        clearInterval(autoKnockTimerRef.current);
    };

    const handleAutoKnockToggle = (shouldAutoKnock) => {
        if (shouldAutoKnock) {
            startAutoKnock();
        } else {
            stopAutoKnock();
        }
        setAutoKnockDialogVisible(false);
    };

    const handleWishSelection = () => {
        setWishText(selectedWish === 'custom' ? customWish : selectedWish);
        setWishDialogVisible(false);
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Space') {
            playMuyu();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    useEffect(() => {
        if (immersiveMode && bgMusicRef.current) {
            bgMusicRef.current.play().catch(error => console.error('背景音乐播放失败: ', error));
        } else if (bgMusicRef.current) {
            bgMusicRef.current.pause();
        }
    }, [immersiveMode]);

    return (
        <div className={styles.container}>
            <div className={styles.muyuContainer}>
                <span className={styles.counter}>{counter}</span>
                <span className={styles.description}>功德</span>
                <div className={styles.muyuGroup}>
                    <img src="/assets/muyu-stick.png" alt="棒子" className={`${styles.stickIcon} ${isHitting ? styles.stickHitAnimation : ''}`} />
                    <img src="/assets/muyu.png" alt="木鱼" className={`${styles.muyuIcon} ${isHitting ? styles.hitAnimation : ''}`} onClick={playMuyu} />
                    {showBonus && <span className={styles.bonusText}>{wishText}</span>}
                </div>
            </div>

            <span className={styles.clickText}>点击木鱼或按空格增加功德</span>

            <div className={styles.switchOptionsContainer}>
                <div className={styles.switchContainer}>
                    <label className={styles.switch}>
                        <input type="checkbox" checked={immersiveMode}
                               onChange={(e) => setImmersiveMode(e.target.checked)} />
                        <span className={styles.slider}></span>
                    </label>
                    <span className={styles.optionLabel}>沉浸模式</span>
                </div>
                <button className={`${styles.option} ${styles.underline}`}
                        onClick={() => setWishDialogVisible(true)}>心愿DIY
                </button>
                <button className={`${styles.option} ${styles.underline}`}
                        onClick={() => setAutoKnockDialogVisible(true)}>自动敲
                </button>
            </div>

            {/* 返回按钮 */}
            <div className={styles.backButtonContainer}>
                <Link to="/" className={styles.backButton}>返回主页</Link>
            </div>

            {/* 心愿DIY弹窗 */}
            {wishDialogVisible && (
                <>
                    <div className={styles.dialogOverlay} onClick={() => setWishDialogVisible(false)}></div>
                    <div className={styles.dialog}>
                        <h3>心愿DIY</h3>
                        <div className={styles.dialogContent}>
                            <label>
                                <input type="radio" name="wish" value="功德 + 1, 诸神保佑"
                                       checked={selectedWish === '功德 + 1, 诸神保佑'}
                                       onChange={() => setSelectedWish('功德 + 1, 诸神保佑')} />
                                功德 + 1, 诸神保佑
                            </label>
                            <label>
                                <input type="radio" name="wish" value="平安喜乐, 功德 + 1"
                                       checked={selectedWish === '平安喜乐, 功德 + 1'}
                                       onChange={() => setSelectedWish('平安喜乐, 功德 + 1')} />
                                平安喜乐, 功德 + 1
                            </label>
                            <label>
                                <input type="radio" name="wish" value="烦恼 - 1, 功德 + 1"
                                       checked={selectedWish === '烦恼 - 1, 功德 + 1'}
                                       onChange={() => setSelectedWish('烦恼 - 1, 功德 + 1')} />
                                烦恼 - 1, 功德 + 1
                            </label>
                            <label>
                                <input type="radio" name="wish" value="custom"
                                       checked={selectedWish === 'custom'}
                                       onChange={() => setSelectedWish('custom')} />
                                自定义
                            </label>
                            {selectedWish === 'custom' && (
                                <input type="text" value={customWish} onChange={(e) => setCustomWish(e.target.value)} placeholder="请输入不超过15字节的内容" maxLength="15" />
                            )}
                        </div>
                        <div className={styles.buttonGroup}>
                            <button onClick={() => setWishDialogVisible(false)}>取消</button>
                            <button onClick={handleWishSelection}>确定</button>
                        </div>
                    </div>
                </>
            )}

            {/* 自动敲弹窗 */}
            {autoKnockDialogVisible && (
                <>
                    <div className={styles.dialogOverlay} onClick={() => setAutoKnockDialogVisible(false)}></div>
                    <div className={styles.dialog}>
                        <h3>自动敲</h3>
                        <div className={styles.dialogContent}>
                            <p>请选择是否开启或关闭自动敲木鱼：</p>
                        </div>
                        <div className={styles.buttonGroup}>
                            <button onClick={() => handleAutoKnockToggle(false)}>取消自动敲</button>
                            <button onClick={() => handleAutoKnockToggle(true)}>开始自动敲</button>
                        </div>
                    </div>
                </>
            )}

            <audio ref={bgMusicRef} loop>
                <source src="/assets/background-music.mp3" type="audio/mpeg" />
                您的浏览器不支持音频元素
            </audio>
            <audio ref={muyuSoundRef}>
                <source src="/assets/muyu-sound.mp3" type="audio/mpeg" />
                您的浏览器不支持音频元素
            </audio>
        </div>
    );
}

export default Muyu;
