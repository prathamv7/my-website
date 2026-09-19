// Wait for the DOM (webpage) to load before running JS
document.addEventListener('DOMContentLoaded', function () {
    // Get references to our form and results container
    const form = document.getElementById('creatorForm');
    const resultsDiv = document.getElementById('results');

    // Listen for form submission (handles button click OR Enter key)
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // STOP page from reloading on submit

        // GET AND CLEAN USER INPUTS
        const niche = document.getElementById('creatorNiche').value.trim();
        const latestContent = document.getElementById('latestContent').value.trim();

        // VALIDATION: Block empty fields (with helpful message)
        if (!niche || !latestContent) {
            alert("⚠️ Please fill in BOTH fields before generating DMs!");
            return;
        }

        // ========================
        // 🎯 CORE LOGIC: GENERATE 10 PERSONALIZED DMS
        // ========================

        // STEP 1: Define your 10 DM templates (using the user's inputs)
        // Notice how we use ${niche} and ${latestContent} to personalize each one!
        const dmTemplates = [
            `Hey ${niche.replace(/^\w/, c => c.toUpperCase())}! Loved your recent video on "${latestContent}" – especially the part about [specific tip]. As someone passionate about ${niche}, I’d love to connect and exchange ideas. No pitch – just genuine curiosity!`,
            `Hi ${niche.replace(/^\w/, c => c.toUpperCase())}, your take on "${latestContent}" really resonated (especially [moment]). I’m building something in ${niche} and would value your perspective. Open to a quick virtual coffee?`,
            `Hey ${niche.replace(/^\w/, c => c.toUpperCase())}, just watched "${latestContent}" – your insight on [topic] was spot-on. As a fellow ${niche} enthusiast, I’d love to hear how you got started in this space!`,
            `Hi ${niche.replace(/^\w/, c => c.toUpperCase())}, your video "${latestContent}" made me rethink [aspect] in ${niche}. Would you be open to sharing one resource that helped you level up? No pressure at all!`,
            `Hey ${niche.replace(/^\w/, c => c.toUpperCase())}, huge fan of how you broke down [specific part] in "${latestContent}". As someone diving deeper into ${niche}, I’d love to pick your brain for 10 minutes – totally get if you’re busy!`,
            `Hi ${niche.replace(/^\w/, c => c.toUpperCase())}, your recent post on "${latestContent}" was exactly what I needed to hear today (especially [quote]). Mind if I follow your journey in ${niche} for inspiration?`,
            `Hey ${niche.replace(/^\w/, c => c.toUpperCase())}, just binged your last 3 videos on ${niche} – "${latestContent}" was my favorite! What’s one thing you wish you knew when starting out?`,
            `Hi ${niche.replace(/^\w/, c => c.toUpperCase())}, loved your authentic take on "${latestContent}" in the ${niche} space. It’s rare to find creators who [specific praise]. Would love to connect!`,
            `Hey ${niche.replace(/^\w/, c => c.toUpperCase())}, your video "${latestContent}" solved a problem I’ve been stuck on (thanks for [tip]!). As a fellow ${niche} creator, I’d love to swap strategies sometime.`,
            `Hi ${niche.replace(/^\w/, c => c.toUpperCase())}, seriously impressed by how you explained [complex idea] in "${latestContent}". It made me rethink my approach to ${niche}. Grateful for creators like you!`
        ];

        // STEP 2: Build HTML to display all 10 DMs
        let resultsHTML = `<h2>✨ Your 10 Personalized DMs:</h2>`;

        dmTemplates.forEach((template, index) => {
            // Each DM gets its own box with a number and subtle styling
            resultsHTML += `
                <div class="dm-box">
                    <strong>DM #${index + 1}:</strong><br>
                    ${template}
                </div>
                <hr class="dm-divider">
            `;
        });

        // STEP 3: Show the results on the page (replaces any old results)
        resultsDiv.innerHTML = resultsHTML;

        // OPTIONAL: Scroll to results so user sees them instantly
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    // COPY ALL BUTTON LOGIC
    document.getElementById('copyBtn').addEventListener('click', function () {
        // Get all text from results div
        const allText = document.getElementById('results').innerText;

        // Try to copy to clipboard
        navigator.clipboard.writeText(allText).then(
            () => {
                // Show success feedback
                const btn = this;
                const originalText = btn.innerText;
                btn.innerText = "✅ Copied!";
                btn.style.background = "#27ae60";
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "#2ecc71";
                }, 2000);
            },
            (err) => {
                // Fallback for browsers that block clipboard (like Safari on file://)
                alert("📋 Copied to clipboard! (If you don’t see it, manually select all text above and press Cmd+C)");
            }
        );
    });
});