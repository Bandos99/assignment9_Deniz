const userQueryUrl = `https://api.github.com/users/${gitUserName}`;
        const repoQueryUrl = `https://api.github.com/users/${gitUserName}/repos`;
        const userResponse = await axios.get(userQueryUrl);
        const repoResponse = await axios.get(repoQueryUrl);
        const starArray = repoResponse.data.map(repo => parseInt(repo.watchers));
        const locationURI = encodeURI(`https://www.google.com/maps/place/${userResponse.data.location}`)