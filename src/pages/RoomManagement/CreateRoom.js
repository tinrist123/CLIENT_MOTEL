import React, { useState } from "react";
import "./CreateRoom.scss";
import { DistrictSelection, WardSelection } from "./Components";
function CreateRoom() {
  const [idDistrict, setIdDistrict] = useState(null);
  const [idWard, setIdWard] = useState(null);

  function changeIdDistrict(idNum) {
    setIdDistrict(idNum);
  }

  return (
    <div class="full-width">
      <div class="body">
        <form action="" class="form-container form-styling5">
          <header class="form-header">Tạo Phòng </header>
          <fieldset class="form-fieldset">
            <section>
              <label class="form-label">Tiêu Đề phòng</label>
              <label class="input-label">
                <input type="text" placeholder="Lorem ipsum dolor sit amet" />
              </label>
            </section>
            {/* <section>
              <label class="form-label">File input</label>
              <label for="file" class="input-label input-file-label">
                <div class="form-button">
                  <input
                    type="file"
                    id="file"
                    onchange="this.parentNode.nextSibling.value = this.value"
                  />
                  Browse
                </div>
                <input type="text" readonly="" />
              </label>
            </section> */}
          </fieldset>
          <fieldset class="form-fieldset">
            <section>
              <label class="form-label">Bài mô tả</label>
              <label class="textarea-label">
                <textarea rows="3"></textarea>
              </label>
              <div class="form-note">
                <strong>Note:</strong> height of the textarea depends on the
                rows attribute.
              </div>
            </section>
            <section className="address">
              <DistrictSelection
                provinceId={"79"}
                changeIdDistrict={(idNum) => changeIdDistrict(idNum)}
              />
              <WardSelection
                idDistrict={"785"}
                changeIdWard={(idNum) => setIdWard(idNum)}
              />
            </section>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default CreateRoom;
