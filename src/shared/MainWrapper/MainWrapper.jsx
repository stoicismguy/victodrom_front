
function MainWrapper({children}) {
    return (
        <div className="w-2/3 flex gap-3 flex-row pt-3 m-auto">
            {children}
        </div>
    );
}

export default MainWrapper