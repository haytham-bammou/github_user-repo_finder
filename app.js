const github = new Github;
const ui = new UI;

const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup',(e)=>{
    const userText = e.target.value;
    if(userText !=='')
    {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found')
                {
                    // show an alert 
                    ui.showAlert('user not found' , 'danger');
                } else {
                    // show the profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repo);
                }
            });
    } else {
        // clear the profile
        ui.clearProfile();

    }
})