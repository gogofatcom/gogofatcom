
import React from "react"
export default function Watchedlistcard() {
    return (
        <>

            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <div style={{ display: 'flex', flexDirection: 'row',  justifyContent: 'space-between' }}>
                          <h5 className="card-title">Card title</h5>
                          <img src="" className="card-img-top" alt="..." />

                          </div>
                            
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}