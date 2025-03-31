import { useState } from "react"

const api_endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'

function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  function handleFormData(e) {
    //console.dir(e.target)

    const key = e.target.name
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

    setFormData({
      ...formData, [key]: value
    })

  }

  function handleFormDataSubmit(e) {
    e.preventDefault()

    console.log(formData);


    fetch(api_endpoint, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data))

  }

  return (
    <>

      <section>

        <div className="container">

          <div className="card text-white bg-dark" >

            <div className="card-header">
              <h1>scrivi il tuo post</h1>
            </div>
            <div className="card-body">

              <form className="row g-3 needs-validation" mothod='POST' onSubmit={handleFormDataSubmit}>

                <div className="col-md-6">
                  <label htmlFor="author" className="form-label">il tuo nome</label>
                  <input type="text" className="form-control" id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleFormData}
                    required />
                  <div className="valid-feedback">
                    ben fatto!
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="title" className="form-label">Titolo del tuo post</label>
                  <input type="text" className="form-control" id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleFormData}
                    required />
                  <div className="valid-feedback">
                    ben fatto!
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="body" className="form-label">cosa ti pasa per la mente?</label>
                  <textarea className="form-control" id="body" rows="3"
                    name='body'
                    value={formData.body}
                    onChange={handleFormData}
                  ></textarea>
                </div>


                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="public"
                    name="public"
                    value={formData.public}
                    onChange={handleFormData}
                  />
                  <label className="form-check-label" htmlFor="public"> pubblica </label>
                </div>

                <button className="btn btn-link">
                  invia
                </button>


              </form>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default App
