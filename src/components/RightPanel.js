import React from "react";
import CustomerFilter from "./CustomerFilter";
import RegionFilter from "./RegionFilter";
import EditIcon from "../assets/edit.png";
import EmojiIcon from "../assets/emoji.png";
import PreviewImg from "../assets/img.png";
import PlusIcon from "../assets/pluse.png";

import Dropdown from "./Dropdown";

const RightPanel = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Condition</h2>
            </div>
            <div className="card-body">
                <RegionFilter/>
                <CustomerFilter/>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h3 className="mb-3">Description</h3>
                        <div className="textareaWrapper">
                            <textarea className="form-control"></textarea>
                            <div className="list-inline mb-0 text-end">
                                <button className="btn btn-sm">
                                    <img src={EditIcon} alt="edit-icon" width="" height=""/>
                                </button>
                                <button className="btn btn-sm">
                                    <img src={EmojiIcon} alt="emoji-icon" width="" height=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <h3 className="mb-3">Select Offer media</h3>
                       <ul className="list-inline">
                           <li className="list-inline-item">
                               <div className="upload-btn-wrapper">
                                   <button className="btn">
                                       <img width="14" height="14" alt="plus-icon" src={PlusIcon}/>
                                   </button>
                                   <input type="file" name="myfile"/>
                               </div>
                           </li>
                           <li className="list-inline-item">
                               <div className="imgPreview">
                                   <span className="close">X</span>
                                   <img width="40" height="40" alt="preview-img" src={PreviewImg}/>
                               </div>
                           </li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightPanel;
