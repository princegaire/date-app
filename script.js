function openSignup() {
    document.getElementById('signup').classList.remove('hidden');
}

document.querySelector(".like").addEventListener("click", function() {
    alert("🔥 You Liked this person!");
});

document.querySelector(".dislike").addEventListener("click", function() {
    alert("❌ You Skipped this person.");
});