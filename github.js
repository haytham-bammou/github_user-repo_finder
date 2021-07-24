class Github {
    constructor(){
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);
        const profile = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_count}`);
        const repo = await repoResponse.json();

        return {
            profile ,//  same as profile : profile
            repo
        };
    }
}