const axios = require('axios')

module.exports =  async( packageName, callback ) => {
	try {
		const url = `https://api.github.com/repos/${ packageName }`;
    const response = await axios.get( url );
    const data = response ? response.data : null
    console.log('url', url)
    const downloads = `
    <ul class="npm-info-list">
    <li class="npm-info-name"><span>Name:</span>
    <a href="//${data.html_url}" target="_blank">${data.name.toUpperCase()}</a>
    </li>
    <li class="npm-info-description">Description:<span> ${data.description}</li>
    <li class="npm-info-version">Version:<span> ${data.version || "n/a" }</li>
    <li class="npm-info-stars">Stars Count:<span> ${data.watchers}</li>
    <li class="npm-info-issues">Open issues:<span> ${data.open_issues_count}</li>
    </ul>
    `
    callback( null, downloads);
	}
	catch( error ){
		callback( error );
	}
}
