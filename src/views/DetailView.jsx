import millify from 'millify'
const DetailView = ({model}) => {
  console.log(model)
  return (
    <div>
      <h3 className='text-center'>
        <span className='me-3 fs-4 font-bold'>{model.coin?.detail.symbol}</span>
        <span className='fs-2 text-warning'>{model.coin?.detail.name}</span>
      </h3>
      <div>
        <section className="d-flex flex-column gap-5 p-5 p-md-3">
          {model?.infoFields?.map((data)=>(
            <div  className="text-bg-light rounded shadow-lg text-center p-3">
              <span className="fs-2">{data.icon}</span>
              <h4>{data.label}</h4>
              <p className='fw-bold'>{millify(data.value)}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default DetailView