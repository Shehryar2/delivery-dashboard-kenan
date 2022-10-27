import React from "react";

const Dropdown = ({ name, badge }) => {
  return (
    <div class="dropdown form-control">
      <a
        class="btn w-100 dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name && name}
        {badge && (
          <span class="badge rounded-pill bg-yellow text-warning p-1 px-2">
            Aswan
            <svg
              className="ml-2"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 0C1.788 0 0 1.788 0 4C0 6.212 1.788 8 4 8C6.212 8 8 6.212 8 4C8 1.788 6.212 0 4 0ZM5.72 5.72C5.68299 5.75708 5.63904 5.7865 5.59065 5.80657C5.54226 5.82665 5.49039 5.83698 5.438 5.83698C5.38561 5.83698 5.33374 5.82665 5.28535 5.80657C5.23696 5.7865 5.19301 5.75708 5.156 5.72L4 4.564L2.844 5.72C2.76921 5.79479 2.66777 5.83681 2.562 5.83681C2.45623 5.83681 2.35479 5.79479 2.28 5.72C2.20521 5.64521 2.16319 5.54377 2.16319 5.438C2.16319 5.38563 2.17351 5.33377 2.19355 5.28538C2.21359 5.237 2.24297 5.19303 2.28 5.156L3.436 4L2.28 2.844C2.20521 2.76921 2.16319 2.66777 2.16319 2.562C2.16319 2.45623 2.20521 2.35479 2.28 2.28C2.35479 2.20521 2.45623 2.16319 2.562 2.16319C2.66777 2.16319 2.76921 2.20521 2.844 2.28L4 3.436L5.156 2.28C5.19303 2.24297 5.237 2.21359 5.28538 2.19355C5.33377 2.17351 5.38563 2.16319 5.438 2.16319C5.49037 2.16319 5.54223 2.17351 5.59062 2.19355C5.639 2.21359 5.68297 2.24297 5.72 2.28C5.75703 2.31703 5.78641 2.361 5.80645 2.40938C5.82649 2.45777 5.83681 2.50963 5.83681 2.562C5.83681 2.61437 5.82649 2.66623 5.80645 2.71462C5.78641 2.763 5.75703 2.80697 5.72 2.844L4.564 4L5.72 5.156C5.872 5.308 5.872 5.564 5.72 5.72Z"
                fill="#FFC107"
              />
            </svg>
          </span>
        )}
      </a>

      <ul class="dropdown-menu bg-white" aria-labelledby="dropdownMenuLink">
        <div className="m-2">
          <span class="badge rounded-pill bg-yellow text-warning px-2 mx-2">
            All
          </span>
          <span class="badge selected-badge rounded-pill bg-yellow text-warning px-2 mx-2">
            Select X
          </span>
          <span class="badge rounded-pill bg-yellow text-warning px-3 mx-2">
            Exclude X
          </span>
          <span class="badge rounded-pill bg-yellow text-warning px-3 mx-2">
            None
          </span>
        </div>
        <form class="px-4">
          <input
            type="search"
            class="form-control"
            id="searchCoin"
            placeholder="Search..."
            autofocus="autofocus"
          />
        </form>
        <li>
          <a class="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
