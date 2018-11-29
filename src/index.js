import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from "./ApprovalCard"

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                Warning
                </div>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail  
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    textContent="Nice Blog" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 5:45PM" 
                    textContent="Beatiful Blog" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 6:45PM" 
                    textContent="fantastic Blog" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));