const axios = require('axios')

module.exports =  async( packageName, callback ) => {
	try {
		const url = `https://api.npms.io/v2/package/${ packageName }`;
    const response = await axios.get( url );
    const data = response ? response.data.collected.metadata : null
    const github = response.data.collected.github ? response.data.collected.github : null
    const npm = response ? response.data.collected.npm : null
    const source = response ? response.data.collected.source : null
    const stars = github ? github.starsCount : 'n/a'
    const openIssues = github ? github.issues.openCount : 'n/a'
    console.log('url', url)
    const downloads = `
    <ul class="npm-package-list">
    <li class="npm-pakage-name">Name: ${data.name}</li>
    <li class="npm-pakage-description">Description: ${data.description}</li>
    <li class="npm-pakage-version">Version: ${data.version}</li>
    <li class="npm-pakage-stars">Stars Count: ${stars}</li>
    <li class="npm-package-issues">Open issues: ${openIssues}</li>
    </ul>
    `
    callback( null, downloads);
	}
	catch( error ){
		callback( error );
	}
}
