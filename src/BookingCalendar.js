import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './BookingCalendar.css';


function BookingCalendar() {
  const [baseCost, setBaseCost] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [pricePlus, setPricePlus] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [iscarouselVisible, setiscarouselVisible]= useState (true)

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const bed = date.getDate();
    let newBaseCost = 0;

    if (bed >= 1 && bed <= 10) {
      newBaseCost = 35000000;
    } else if (bed >= 11 && bed <= 15) {
      newBaseCost = 45000000;
    } else if (bed >= 16 && bed <= 30) {
      newBaseCost = 43000000;
    }

    setBaseCost(newBaseCost);
    setTotalCost(null);

  //Notifikasi setelah memilih tanggal
  toast.success("Silahkan pilih hotel untuk melanjutkan", {
    position: toast.POSITION.TOP_CENTER,
  });
  };

  

// ngehold totalan harga yang akan dikeluarkana ketika telah memilih tanggal dan hotel
  const calculateTotalCost = () => {
    if (selectedDate === null || totalCost === null) return 0;

    // Format angka ke mata uang Indonesia (Rupiah)
    const formattedTotalCost = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(totalCost);

    return formattedTotalCost;
  };

  // memperhitungkan harga dasar berdasarkan tanggal yang dipilih dan harga tambahan yang dipilih setelah memilih hotel
  const applyPricePlus = (amount) => {
    setPricePlus(amount);

    if (baseCost !== null) {
      setTotalCost(baseCost + amount);
    }
  };
// fitur untuk modal vidio (popup)
  const openVideo = () => {
    setiscarouselVisible(false) //nge hide carousel ketika popup muncul
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setiscarouselVisible(true) // munculin carousel pas popup close
    setIsVideoOpen(false);
  };

  return (
    
    <div>

        {/* mulai grid */}
        <div class="container-lg">
            <div class="container">
              {/* row pertama */}
                <div className="row flex justify-content-center">
                  {/* start kolom pertama */}
                  {iscarouselVisible && (
                    <div className="col-md-3">
                    <br/><br/>
                    <div id="carouselExample" class="carousel slide">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="https://adhiyatravel.com/wp-content/uploads/2023/10/FLYER-DUBAI.jpg" class="d-block w-100" alt="tour dubai" className="img-fluid "/>
                        </div>
                        <div class="carousel-item">
                          <img src="https://adhiyatravel.com/wp-content/uploads/2023/10/FLYER-TURKEY-PLUS.jpg" class="d-block w-100" alt="tour turkey"/>
                        </div>
                        <div class="carousel-item">
                          <img src="https://adhiyatravel.com/wp-content/uploads/2023/10/FLYER-MESIR.jpg" class="d-block w-100" alt="tour mesir"/>
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  )}
                    
                    {/* start kolom kedua */}
                    <div className="col-md-5 ">
                      <br/>
                      <h1 className="mb-4">Umroh Plus Mesir Januari 2024</h1>
                      <div className="container">
                        <p className=" text-justify ">Selamat datang dalam pengalaman suci yang luar biasa. Umroh plus mesir selama 11 hari: Perjalanan suci yanng menyentuh hati, ditambah petualangan luar biasa di Mesir. Dalam 11 hari ini, kita akan menjalani ibadah suci dan mengeksplorasi keajaiban Mesir bersama.
                          Bersiaplah unutk perjalanan spiritual dan petualangan yang tak terlupakan.
                        </p>
                      </div>
                      
                      <label>Pilih Tanggal: </label>
                      <br />
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        className="form-control" // Menambahkan kelas Bootstrap untuk styling
                        dateFormat="dd/MM/yyyy" // Mengganti format tanggal
                        showMonthDropdown // Menampilkan dropdown bulan
                        showYearDropdown // Menampilkan dropdown tahun
                        dropdownMode="select" // Mode dropdown
                        placeholderText="Pilih Tanggal" // Teks placeholder
                        popperPlacement="auto" // Penempatan Popper
                      />


                      {/* fasilitas tour */}
                      <div className="mt-3">
                        <h2> Fasilitas yang Diperoleh :</h2> 
                        <ul>
                          <li onClick={openVideo} style={{ cursor: 'pointer' }}>Tiket Pesawat PP</li>
                          <Modal
                            isOpen={isVideoOpen}
                            videoId="4bzFo8d6ixM"
                            onRequestClose={closeVideo}
                            contentLabel="Video Modal">
                            <div>
                              <div>
                               <button onClick={closeVideo} type="button" className="btn-close" aria-label="Close"></button>
                              </div>
                              <iframe
                                title="YouTube Video"
                                width="1500" // Menggunakan vw untuk lebar
                                height="600" // Menggunakan vh untuk tinggi
                                src="https://www.youtube.com/embed/4bzFo8d6ixM"
                                frameborder="0"
                                allowfullscreen> 
                              </iframe>
                            </div>
                            {/* <button onClick={closeVideo}>Tutup</button> */}
                          </Modal>
                          <li>Visa Umroh + Visa Dubai</li>
                          <li>Visa Umroh + Visa Dubai</li>
                          <li>Visa Umroh + Visa Dubai</li>
                          <li>Visa Umroh + Visa Dubai</li>
                          <li>Visa Umroh + Visa Dubai</li>
                        </ul>
                      </div>

              
                      <div className="hotel-options">
                        <h2 className="mt-4">Pilih Hotel</h2>
                        <div className="button-group">
                          <button onClick={() => { applyPricePlus(0); }} className="btn btn-outline-danger me-2">Quad</button>
                          <button onClick={() => { applyPricePlus(4000000); }} className="btn btn-outline-danger me-2">Triple</button>
                          <button onClick={() => { applyPricePlus(6000000); }} className="btn btn-outline-danger">Double</button>
                        </div>
                        <h3 className="mt-3">Total Biaya : {calculateTotalCost()}</h3>
                      </div>


                      <div className="mt-4">
                        <button type="button" class="btn btn-warning me-3"> 
                          <i className="bi bi-cart-plus"></i> Tambahkan Ke Keranjang
                        </button>
                        <button type="button" class="btn btn-success"> 
                          <i className="bi bi-whatsapp"></i> Booking Via WhatsApp
                        </button>
                      </div>
                    </div> 
                    {/* div diatas akhir kolom kedua */}
                </div>
                {/* div diatas akhir row  */}
            </div>
            {/* div diatas akhir container */}
        </div>
    {/* //batas grid */}
    </div>
  );
  }
  
export default BookingCalendar;
