const DisplayBoard = ({numberOfItems, getAllItems}) => {
    
    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 수</h4>
                    <div className="number">
                    {numberOfItems}
                    </div>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllItems()}>생성 내역</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayBoard;