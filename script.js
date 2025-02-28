document.addEventListener('DOMContentLoaded', () => {
    const resumeLink = document.getElementById('resume-download');

    resumeLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        const resumeUrl = resumeLink.getAttribute('href');
        downloadResume(resumeUrl);
    });

    function downloadResume(url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = 'My_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
});
