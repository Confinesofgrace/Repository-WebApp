import { useState, useEffect } from "react";


const FetchRepo = () =>
{
    const [repo, setRepo] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/user/repos')
        .then(Response => {

            if (!Response.ok) {
                throw Error ('Oops! Could not fetch data..');
            }
            return Response.json();})
        .then(data => {
            setRepo(data);
            setIsloading(false);
        
        })
        .catch( err => {
            setError(err.message);
        } );


    }, []);
    //had to change repo into an array - [repo] line 20
    return(
        <div>
            
           {[repo].map((repo) =>(
                <div id= "repo-preview" key={repo.id}>
                    

                    {isLoading && <div>Loading...</div>}

                    <h2>{repo.login}</h2>
                    
                    {repo.id}
                    
                </div>

            ))}
        </div>
    );
}

export default FetchRepo;