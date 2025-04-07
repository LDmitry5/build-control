import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";

function ProfileLogo() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Dropdown className="d-flex">
      <Dropdown.Toggle className="text-primary-emphasis fs-3" variant="transparent" id="dropdown-basic">
        <FontAwesomeIcon className="mb-1" icon={faUser} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            navigate("/", { replace: true });
          }}>
          <FontAwesomeIcon icon={faHouseChimney} />
          &ensp;Home
        </Dropdown.Item>
        <Dropdown.Item onClick={signout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          &ensp;LogOut
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { ProfileLogo };
