// Store the number of votes for each option
let votes = {
    JavaScript: 0,
    Python: 0,
};
function submitVote() {
    const vote = document.querySelector('input[name="vote"]:checked');
    if (vote) {
        const selected = vote.value;
        if (selected === "C++") {
            votes.Cplusplus++;
        } else {
            votes[selected]++;
        }
        updateResults();
    } else {
        alert("Please select an option before voting!");
    }
}
function updateResults() {
    document.getElementById('jsVotes').textContent = votes.JavaScript;
    document.getElementById('pyVotes').textContent = votes.Python;
}
function simulateMultipleUsers() {
    const options = ['JavaScript', 'Python'];

    setInterval(() => {
        const randomVote = options[Math.floor(Math.random() * options.length)];

        if (randomVote === "C++") {
            votes.Cplusplus++;
        } else {
            votes[randomVote]++;
        }

        updateResults();
    }, 3000); 
}
 