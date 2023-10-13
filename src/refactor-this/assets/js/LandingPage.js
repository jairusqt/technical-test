function LandingPage () {}

LandingPage.createLandingPage = () => {
    let landing = document.getElementById('landingPage');
    landing.innerHTML += `
        <div class="bg-light bg-gradient" style="height: 75vh;">
            <div class="container p-2">
                <p class="display-1 text-center">
                    <em>Photo Gallery App</em>
                </p>
            </div>
        </div>
    `;
}
