


const Repository = (props) => 
{
    return(
            <div id="repository">
                <p>Repo Title</p>
                
                <div id="repo-card">
                    <div id="avatar-div">
                        <img src= {props.owner.avatar_url} alt= {props.owner.login} id="avatar" />
                    </div>
                   
                    <div id="repo-preview">
                        <h4>{props.owner.login}</h4>
                        <p>{props.name}</p>
                        {props.private ? (<p id="private">Private</p>) : 
                        (<p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow">Public</p>)}
                    </div>
                    
                </div>

            </div>

            
    );
}


export default Repository;