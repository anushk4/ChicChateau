import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus laboriosam, nisi, repudiandae optio consectetur dignissimos asperiores ratione facere maxime, voluptatum deleniti quis quod adipisci laudantium ad quidem dolor! Modi veritatis eum vitae voluptas soluta doloribus ipsam nihil asperiores fugiat libero itaque ea sequi iste dicta, autem quos id obcaecati.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At veniam ab, non molestiae voluptate eveniet dolorum modi excepturi optio est.</p>
        </div>
    </div>
  )
}
