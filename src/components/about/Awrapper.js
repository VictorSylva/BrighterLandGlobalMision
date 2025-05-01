import React from "react"

const impactStats = [
  {
    icon: "fas fa-child",
    value: "1,000+",
    label: "Children Sponsored"
  },
  {
    icon: "fas fa-gavel",
    value: "500",
    label: "Lawyers Trained"
  },
  {
    icon: "fas fa-user-md",
    value: "500",
    label: "Doctors Trained"
  },
  {
    icon: "fas fa-users",
    value: "50+",
    label: "Communities Reached"
  }
]

const Awrapper = () => {
  return (
    <section className='awrapper'>
      <div className='awrapper-overlay'>
        <div className='awrapper-row'>
          {impactStats.map((stat, idx) => (
            <div className='awrapper-box' key={idx}>
              <div className='awrapper-icon'>
                <i className={stat.icon}></i>
              </div>
              <div className='awrapper-text'>
                <h1>{stat.value}</h1>
                <h3>{stat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awrapper 