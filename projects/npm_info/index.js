const axios = require('axios')

module.exports =  async( packageName, callback ) => {
	try {
		const url = `https://api.npms.io/v2/package/${ packageName }`;
    const response = await axios.get( url );
    const data = response ? response.data.collected.metadata : null
    const github = response.data.collected.github ? response.data.collected.github : null
    const npm = response ? response.data.collected.npm : null
    const source = response ? response.data.collected.source : null
    const repository = data.links ? data.links.repository : null
    const stars = github ? github.starsCount : 'n/a'
    const openIssues = github ? github.issues.openCount : 'n/a'
    console.log('url', url)
    const downloads = `
    <ul class="npm-info-list">
    <li class="npm-info-name"><span>Name:</span>
    <a href="${repository}" target="_blank">${data.name.toUpperCase()}</a>
    </li>
    <li class="npm-info-description">Description:<span> ${data.description}</li>
    <li class="npm-info-version">Version:<span> ${data.version}</li>
    <li class="npm-info-stars">Stars Count:<span> ${stars}</li>
    <li class="npm-info-issues">Open issues:<span> ${openIssues}</li>
    </ul>
    `
    callback( null, downloads);
	}
	catch( error ){
		callback( error );
	}
}
