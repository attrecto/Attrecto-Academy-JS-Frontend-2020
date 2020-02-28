import React, { useState, useEffect } from "react";
import { getBadges } from "../../services/badges";
import Button from "../button/Button";

const Badges = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const badges = await getBadges();
      setBadges(badges);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>Badges</div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>{""}</th>
              </tr>
            </thead>
            <tbody>
              {badges.map((badge, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{badge.name}</td>
                  <td>{badge.description}</td>
                  <td>
                    <Button>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Badges;
