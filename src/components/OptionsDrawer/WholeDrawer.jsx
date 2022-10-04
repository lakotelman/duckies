const WholeDrawer = props => { 
    return (
        <div className="collapse collapse-arrow bg-slate-500 h-min rounded-box w-1/3">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
          Eyes
        </div>
        <div className="collapse-content"> 
          <a><img src=""/></a>
        </div>
      </div>
    )
}

export default WholeDrawer