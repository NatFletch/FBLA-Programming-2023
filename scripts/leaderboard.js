// this is a mess come back to this

const getUsersWithPoints = async() => {;
    try {
      const { rows } =  db_client.query(`
        SELECT username, points 
        FROM user_profiles 
        ORDER BY points DESC
      `);
      return rows;
    } catch (err) {
      console.error("Error fetching users with points: ", err);
      return null;
    }
  };
  
const displayLeaderboard = async () => {
    const usersWithPoints = await getUsersWithPoints();
    if (!usersWithPoints) {
      console.log("Error fetching users with points");
      return;
    }
    
    const leaderboardContainer = document.getElementById("leaderboard-container");
    leaderboardContainer.innerHTML = "";
    
    usersWithPoints.forEach((user, index) => {
      const userRank = index + 1;
      const userContainer = document.createElement("div");
      userContainer.classList.add("user-container");
      
      const usernameElement = document.createElement("p");
      usernameElement.textContent = `${userRank}. ${user.username}`;
      usernameElement.classList.add("username");
      userContainer.appendChild(usernameElement);
      
      const pointsElement = document.createElement("p");
      pointsElement.textContent = user.points;
      pointsElement.classList.add("points");
      userContainer.appendChild(pointsElement);
      
      leaderboardContainer.appendChild(userContainer);
    });
  };

  async function displayLeaderboard() {
const leaderboardData = await getLeaderboardData();

const tbody = document.querySelector('#leaderboard-table tbody');
tbody.innerHTML = '';

leaderboardData.forEach((user, index) => {
    const row = tbody.insertRow();
    const rankCell = row.insertCell();
    const nameCell = row.insertCell();
    const pointsCell = row.insertCell();

    rankCell.textContent = index + 1;
    nameCell.textContent = user.name;
    pointsCell.textContent = user.points;
});
}

displayLeaderboard();
  

window.addEventListener('load', displayLeaderboard);