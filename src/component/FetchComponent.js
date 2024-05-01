const baseURL =
    'https://api.airtable.com/v0/appRqFTbqDUEC8paK/Photos?view=Grid%20view';
const headers = {
    Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,
};
function FetchComponent(setPhotoData) {
    fetch(baseURL, { headers })
        .then((res) => res.json())
        .then(({ records }) => {
            const fields = records.map((r) => r.fields);
            setPhotoData(fields);
        })
        .catch((err) => {
            console.log(err);
        });
}

export default FetchComponent