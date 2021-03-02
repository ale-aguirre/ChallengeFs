import React from "react";

const useForm = () => {
  return (
    <div>
      <form className="form-horizontal">
        <fieldset>
          <legend>Add your Item</legend>
          <div className="form-group">
            <label className="col-md-4 control-label" for="textinput">
              Name
            </label>
            <div className="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="Name .. "
                className="form-control input-md"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label" for="textarea">
              Description
            </label>
            <div className="col-md-4">
              <textarea className="form-control" id="textarea" name="textarea">
                Describe your product..
              </textarea>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" for="textinput">
              Price
            </label>
            <div className="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="$$"
                className="form-control input-md"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" for="textinput">
              Type
            </label>
            <div className="col-md-4">
              <input
                id="textinput"
                name="textinput"
                type="text"
                placeholder="rate.."
                className="form-control input-md"
              />
              <span className="help-block">help</span>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" for="filebutton">
              Image
            </label>
            <div className="col-md-4">
              <input
                id="filebutton"
                name="filebutton"
                className="input-file"
                type="file"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" for="singlebutton"></label>
            <div className="col-md-4">
              <button
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default useForm;
