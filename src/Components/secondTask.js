async function fetchUserData(userIds) {
    let users = [];
    
    for(let id of userIds) {
        await new Promise((resolve) => {
            getUser(id, function(user) {
                users.push(user);
                resolve();
            });
            
        });
    };
 
    // Check if all users were fetched
    if (users.length === userIds.length) {
        console.log('All users fetched:', users);
    } else {
        console.log('Not all users were fetched.');
    }
}
 
// Simulated async API call
function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: 'User' + id });
    }, Math.random() * 1000);
}
 
// Example usage
let userIds = [1, 2, 3, 4, 5];
//fetchUserData(userIds);

export{fetchUserData}
