import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
   

      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center"
        style={{
          height: "85vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            padding: "50px",
            borderRadius: "15px",
          }}
        >
          <h1 className="display-3 fw-bold">
            Car Rental Management System
          </h1>

          <p className="lead mt-3">
            Manage rental cars with ease. Add new cars, browse available
            vehicles, and organize your fleet efficiently.
          </p>

          <div className="mt-4">
            <Link to="/add-car" className="btn btn-warning btn-lg me-3">
              Add Car
            </Link>

            <Link to="/cars" className="btn btn-outline-light btn-lg">
              View Cars
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">
          Why Choose Our Car Rental System?
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt=""
              />
              <div className="card-body">
                <h4>Premium Cars</h4>
                <p>
                  Browse hatchbacks, sedans, SUVs and luxury vehicles for every
                  journey.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt=""
              />
              <div className="card-body">
                <h4>Easy Management</h4>
                <p>
                  Add, update and manage your complete fleet with a simple and
                  modern interface.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt=""
              />
              <div className="card-body">
                <h4>Affordable Pricing</h4>
                <p>
                  View daily rental prices and availability for every vehicle in
                  one place.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">
            Ready to Manage Your Fleet?
          </h2>

          <p className="lead">
            Start adding your rental cars and make vehicle management easier.
          </p>

          <Link to="/add-car" className="btn btn-warning btn-lg">
            Get Started
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-3">
        <p className="mb-0">
          © 2026 Car Rental Management System | Developed with React & Bootstrap
        </p>
      </footer>
    </div>
  );
};

export default Home;