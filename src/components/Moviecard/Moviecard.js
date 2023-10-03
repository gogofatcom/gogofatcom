import React from "react"

export default function Moviecard() {
    return (
        <>
            <div className="card"  >
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">movie title</h5>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p className="card-text">10/4/2023 .</p>
                    <img src="" className="card-img-top" alt="..." />

                    </div>
                   
                 
                </div>
            </div>
        </>
    )
}