//Render Props refers to a technique of passing a prop called 'render' that is a function. This function needs to return React elements to be considered a render prop. The component that recieves the render prop would then invoke the prop instead of implementing its own render logic. Like Higher Order Components, this is a great technique for re-using code logic, and specifically render logic in render props case.
import React from 'react';

const RenderProp = ({render}) => (
    render((genre, list) => {
	    const filteredList = genre ? list.filter((artist) => artist.genre === genre) : list
        return (
            <div>
        	{filteredList.map((artist) => (
                <div className = 'artist-container' key = {artist.name}>
                 	<img className = 'artist-img' src = {artist.artistImg} alt = {artist.name} />
                 	<div className = 'artist-info'>
                 		<h3>{artist.name}</h3>
                        <p>{artist.genre}</p>
                    	</div>
                	</div>
            	))}
        	</div>
        )
    })
)

export default RenderProp;