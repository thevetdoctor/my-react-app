
const getUrl = () => {
	if(window.location.host.indexOf('localhost') == -1){
		return 'http://localhost:8000/';
	} else {
		return 'https://stackflowlite-api-v1.herokuapp.com/';
	}
}

const apiUrl = getUrl();