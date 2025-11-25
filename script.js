window.onload = async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    const workHours = document.getElementById('work-hours');
    const workPrevious = document.getElementById('work-previous');
    const playHours = document.getElementById('play-hours');
    const playPrevious = document.getElementById('play-previous');
    const studyHours = document.getElementById('study-hours');
    const studyPrevious = document.getElementById('study-previous');
    const exerciseHours = document.getElementById('exercise-hours');
    const exercisePrevious = document.getElementById('exercise-previous');
    const socialHours = document.getElementById('social-hours');
    const socialPrevious = document.getElementById('social-previous');
    const selfCareHours = document.getElementById('selfcare-hours');
    const selfCarePrevious = document.getElementById('selfcare-previous');

    const dailyBtn = document.getElementById('daily-btn');
    const weeklyBtn = document.getElementById('weekly-btn');
    const monthlyBtn = document.getElementById('monthly-btn');

    function updateDashboard(timeframe) {
        const timeData = data.map(item => item.timeframes[timeframe]);
        workHours.textContent = `${timeData[0].current}hrs`;
        workPrevious.textContent = `Previous - ${timeData[0].previous}hrs`;

        playHours.textContent = `${timeData[1].current}hrs`;
        playPrevious.textContent = `Previous - ${timeData[1].previous}hrs`;

        studyHours.textContent = `${timeData[2].current}hrs`;
        studyPrevious.textContent = `Previous - ${timeData[2].previous}hrs`;

        exerciseHours.textContent = `${timeData[3].current}hrs`;
        exercisePrevious.textContent = `Previous - ${timeData[3].previous}hrs`;

        socialHours.textContent = `${timeData[4].current}hrs`;
        socialPrevious.textContent = `Previous - ${timeData[4].previous}hrs`;

        selfCareHours.textContent = `${timeData[5].current}hrs`;
        selfCarePrevious.textContent = `Previous - ${timeData[5].previous}hrs`;
    }

    dailyBtn.addEventListener('click', () => updateDashboard('daily'));
    weeklyBtn.addEventListener('click', () => updateDashboard('weekly'));
    monthlyBtn.addEventListener('click', () => updateDashboard('monthly'));

    // Initialize with weekly data
    updateDashboard('weekly');
}