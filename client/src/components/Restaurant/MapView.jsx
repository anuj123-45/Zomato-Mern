import React from 'react'
import { IoMdCopy } from "react-icons/io";
import { FaDirections } from "react-icons/fa";
// components
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapView=(props)=>{
   // const position = [13.884032176876717, 77.60037198127637]
  return (
   <>
     
          <h4 className='text-lg font-medium'>Call</h4>
          <h5 className='text-zomato-400 font-medium'>{props.phno}</h5>
          <h4 className='text-lg font-medium'>Direction</h4>
          <div className='w-full h-48'>
            <MapContainer center={props.mapLocation} zoom={13}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={props.mapLocation}>
                <Popup>
                  {props.title}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <p>{props.address}</p>
          <div className='flex items-center gap-3 my-2'>
            <button className='flex items-center gap-2 border border-gray-400 px-2 py-1 rounded-md'> <IoMdCopy />Copy</button>
            <button className='flex items-center gap-2 border border-gray-400 px-2 py-1 rounded-md'><span className='text-zomato-400'><FaDirections /></span>{" "}Direction</button>
          </div>
   
   </>
  )
}

export default MapView