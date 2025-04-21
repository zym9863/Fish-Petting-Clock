let workTime = 25 * 60; // 工作时间（25分钟）
let breakTime = 5 * 60; // 休息时间（5分钟）
let timeLeft = workTime;
let isRunning = false;
let isWorkTime = true;
let timer = null;

// DOM 元素
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const statusDisplay = document.getElementById('status');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// 更新显示时间
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    minutesDisplay.textContent = minutes.toString().padStart(2, '0');
    secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

// 更新状态显示
function updateStatus() {
    statusDisplay.textContent = isWorkTime ? '工作时间' : '休息时间';
}

// 切换工作/休息状态
function toggleMode() {
    isWorkTime = !isWorkTime;
    timeLeft = isWorkTime ? workTime : breakTime;
    updateStatus();
    updateDisplay();
}

// 计时器逻辑
function tick() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
    } else {
        // 播放提示音
        new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1NOTgzOEVaxfOlwr7Az8vN/f/27NTu1v/6/fP++vr/+N3YzODo3vP08vLz9Pz98uPh4OHg4OL07feakI99bGdpd3mDjKSsvL2sqqyxu7O+xMG5vb2yur3Gyb2wvbZoYmJZVGBwi4SRkpWLkH+AbHN0X2NygYN5e4R0coCHhpGIi4SadnmEgH58eYGFhIyPjSAeGhYaJzI9cFholqewvr20t7CprL3MyLW5vbW9ur7Nw7S8tKqtvLW5usG/vbG3wsG5u8DAu7u3vb68tKy0lYuJcnNxZmVldW1tcnR3eHp8fYGCfH19eHd6fHyEgoSEhYOGhIaGhYaEhYOGg4OCgYGBgoGDgoGBgYB/gICAgH9+f39+f35+fn19fn19fX19fH19fHx9fX19fH1+f4B/gIGCgoKDg4ODg4SEg4SDhISEgoKDgoKCgYGAgH9+f35+fX18e3t7enp5eXh4d3d2dnV0dHNycXFwcG9ubm1tbGxrbGtramppaWhoaGdnZ2ZmZmVlZGRkZGRkZGRkZGRkZWVlZmZnZ2hoaWpra2xtbm9vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/').play();
        toggleMode();
    }
}

// 开始计时
function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(tick, 1000);
        startButton.disabled = true;
        pauseButton.disabled = false;
    }
}

// 暂停计时
function pause() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        startButton.disabled = false;
        pauseButton.disabled = true;
    }
}

// 重置计时器
function reset() {
    pause();
    isWorkTime = true;
    timeLeft = workTime;
    updateStatus();
    updateDisplay();
}

// 事件监听
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);

// 初始化
pauseButton.disabled = true;
updateDisplay();
updateStatus();