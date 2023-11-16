const url = "https://v1.nocodeapi.com/desacimarga/instagram/TCLwepDfMGSrrzeP?limit=12";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row';

        data.data.forEach(row => {
            const column = document.createElement('div');
            column.className = 'coloum';

            const menuCard = document.createElement('div');
            menuCard.className = 'menu-card';

            const imageLink = document.createElement('a');
            imageLink.href = row.permalink;
            imageLink.target = '_blank';

            const image = document.createElement('img');
            image.src = row.media_url;
            image.alt = 'Feed-Instagram';
            image.className = 'menu-card-image';

            imageLink.appendChild(image);
            menuCard.appendChild(imageLink);
            column.appendChild(menuCard);
            rowContainer.appendChild(column);
        });

        // Assuming you have a container element in your HTML with the id "container"
        const container = document.getElementById('container');
        container.appendChild(rowContainer);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });