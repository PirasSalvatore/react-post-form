



function App() {


  return (
    <>

      <body>
        <section>
          <div className="container">
            <div className="card text-white bg-dark" >
              <div className="card-header">
                <h1>Write you post</h1>
              </div>
              <div className="card-body">
                <form className="row g-3 needs-validation" method='POST'>

                  <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text-area" className="form-control" id="validationCustom02" value="Otto" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="public" />
                    <label className="form-check-label" htmlFor="public"> public? </label>
                  </div>


                </form>
              </div>
            </div>
          </div>

        </section>
      </body>

    </>
  )
}

export default App
