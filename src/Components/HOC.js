import React from 'react';

//Higher Order Components refers to a technique of passing a component into a function and then returning a new component out of it. This is a great technique for re-using logic between components, and is actually how react-redux connect method works under the hood.
const withFilteredProps = (BaseComponent) => ({list, genre}) => {
    const filteredList = genre ? list.filter(artist => artist.genre === genre) : list
    return <BaseComponent artistList={filteredList}/>
}

const DisplayList = ({artistList}) => {
    return (
        <div>
            {artistList.map((artist) => (
	        <div className='artist-container' key={artist.name}>
         	<img className='artist-img' src={artist.artistImg} alt={artist.name} />
                 <div className='artist-info'>
                 	<h3>{artist.name}</h3>
                    <p>{artist.genre}</p>
                  </div>
            </div>
            ))}
        </div>
    )
}

const HOC = withFilteredProps(DisplayList);

export default HOC;