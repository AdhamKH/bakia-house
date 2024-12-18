"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { AdImage } from "./imgs";
import logo from "../../assets/logo.webp";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { baseUrl, companyID } from "@/util";
import Loader from "../loader";
const Footer = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Loading state
  const conpanyInfo = data?.data[0];
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loader when starting the request
      try {
        const response = await axios.get(`${baseUrl}/companies/${companyID}`);
        setData(response.data); // Save the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("conpanyInfo", conpanyInfo);

  if (loading) {
    return <Loader />;
  }
  return (
    <footer className={styles["site-footer"]}>
      <div className={styles.contnet}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="logo" width={200}></Image>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.314 28.323"
                height={20}
                width={20}
                fill="white"
              >
                <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
              </svg>
              {conpanyInfo?.phone}
            </li>
            <li>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.314 28.323"
                height={20}
                width={20}
                fill="white"
              >
                <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
              </svg>
              {conpanyInfo?.mobile}
            </li>
          </ul>
        </div>
        <div className={styles.middle}>
          <div className={styles.header}>Quick links</div>
          <div className={styles.list}>
            <ul>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/furniture">
                <li>furniture</li>
              </Link>
              <Link href="/commercial">
                <li>Commercial</li>
              </Link>
              <Link href="/residential">
                <li>Residential</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className={styles.last}>
          <div className={styles.header}>Our Social media</div>
          <div className={styles.list}>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/share/LcvAoq2QRpD8yEEw/?mibextid=qi2Omg"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M23.9997 2.66699H19.9997C18.2316 2.66699 16.5359 3.36937 15.2856 4.61961C14.0354 5.86986 13.333 7.56555 13.333 9.33366V13.3337H9.33301V18.667H13.333V29.3337H18.6663V18.667H22.6663L23.9997 13.3337H18.6663V9.33366C18.6663 8.98004 18.8068 8.6409 19.0569 8.39085C19.3069 8.1408 19.6461 8.00033 19.9997 8.00033H23.9997V2.66699Z"
                      stroke="white"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bakia.house?igsh=MXdlaTd1ZGRpbHV6cg%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M22.667 2.66699H9.33366C5.65176 2.66699 2.66699 5.65176 2.66699 9.33366V22.667C2.66699 26.3489 5.65176 29.3337 9.33366 29.3337H22.667C26.3489 29.3337 29.3337 26.3489 29.3337 22.667V9.33366C29.3337 5.65176 26.3489 2.66699 22.667 2.66699Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.3336 15.1604C21.4981 16.2701 21.3086 17.4034 20.7919 18.3991C20.2753 19.3948 19.4578 20.2023 18.4558 20.7066C17.4537 21.211 16.3182 21.3865 15.2106 21.2083C14.1031 21.0301 13.0799 20.5072 12.2867 19.714C11.4935 18.9207 10.9706 17.8976 10.7924 16.79C10.6141 15.6825 10.7897 14.5469 11.294 13.5449C11.7984 12.5429 12.6058 11.7254 13.6016 11.2087C14.5973 10.6921 15.7306 10.5025 16.8403 10.6671C17.9722 10.8349 19.0201 11.3624 19.8292 12.1715C20.6383 12.9806 21.1657 14.0285 21.3336 15.1604Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.333 8.66699H23.3463"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              {/* <li>
              <a
                href="https://www.instagram.com/bakia.house?igsh=MXdlaTd1ZGRpbHV6cg%3D%3D&utm_source=qr"
                target="_black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M24.2735 3H28.6841L19.0481 14.0133L30.3841 29H21.5068L14.5548 19.9107L6.60012 29H2.18678L12.4935 17.22L1.62012 3H10.7201L17.0041 11.308L24.2735 3ZM22.7255 26.36H25.1695L9.39345 5.50133H6.77078L22.7255 26.36Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li> */}
              {/* <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M21.333 10.667C23.4547 10.667 25.4896 11.5098 26.9899 13.0101C28.4902 14.5104 29.333 16.5453 29.333 18.667V28.0003H23.9997V18.667C23.9997 17.9597 23.7187 17.2815 23.2186 16.7814C22.7185 16.2813 22.0403 16.0003 21.333 16.0003C20.6258 16.0003 19.9475 16.2813 19.4474 16.7814C18.9473 17.2815 18.6663 17.9597 18.6663 18.667V28.0003H13.333V18.667C13.333 16.5453 14.1759 14.5104 15.6762 13.0101C17.1764 11.5098 19.2113 10.667 21.333 10.667Z"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00033 12H2.66699V28H8.00033V12Z"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33366 8.00033C6.80642 8.00033 8.00033 6.80642 8.00033 5.33366C8.00033 3.8609 6.80642 2.66699 5.33366 2.66699C3.8609 2.66699 2.66699 3.8609 2.66699 5.33366C2.66699 6.80642 3.8609 8.00033 5.33366 8.00033Z"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li> */}
              {/* <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M30.0538 8.55967C29.8954 7.92689 29.5728 7.3471 29.1186 6.87888C28.6645 6.41066 28.0948 6.07059 27.4671 5.89301C25.1738 5.33301 16.0004 5.33301 16.0004 5.33301C16.0004 5.33301 6.8271 5.33301 4.53377 5.94634C3.9061 6.12392 3.33641 6.464 2.88223 6.93222C2.42806 7.40044 2.10549 7.98022 1.9471 8.61301C1.52739 10.9404 1.32208 13.3014 1.33377 15.6663C1.31881 18.0491 1.52413 20.4281 1.9471 22.773C2.12172 23.3861 2.45151 23.9439 2.90463 24.3923C3.35774 24.8408 3.91886 25.1648 4.53377 25.333C6.8271 25.9463 16.0004 25.9463 16.0004 25.9463C16.0004 25.9463 25.1738 25.9463 27.4671 25.333C28.0948 25.1554 28.6645 24.8154 29.1186 24.3471C29.5728 23.8789 29.8954 23.2991 30.0538 22.6663C30.4702 20.3565 30.6755 18.0135 30.6671 15.6663C30.6821 13.2836 30.4767 10.9046 30.0538 8.55967Z"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 20.0266L20.6667 15.6666L13 11.3066V20.0266Z"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li> */}
              <li>
                <a
                  href="https://www.tiktok.com/@bakiahouse?_t=8pYOv3ZvzzE&_r=1"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M28 9C26.4092 8.99835 24.884 8.36567 23.7592 7.24081C22.6343 6.11595 22.0017 4.59079 22 3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H16C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V19.5C14.9998 19.9474 14.8796 20.3865 14.6518 20.7715C14.4241 21.1566 14.0972 21.4735 13.7053 21.6891C13.3133 21.9048 12.8707 22.0114 12.4236 21.9977C11.9764 21.984 11.5411 21.8506 11.1631 21.6114C10.7851 21.3722 10.4782 21.0359 10.2744 20.6376C10.0707 20.2394 9.97747 19.7938 10.0046 19.3472C10.0317 18.9007 10.1782 18.4696 10.4287 18.099C10.6792 17.7283 11.0245 17.4317 11.4288 17.24C11.5997 17.1589 11.7442 17.0309 11.8453 16.8709C11.9464 16.7109 12.0001 16.5255 12 16.3363V11C12.0001 10.8538 11.9681 10.7094 11.9063 10.5769C11.8445 10.4445 11.7544 10.3271 11.6424 10.2332C11.5304 10.1393 11.3992 10.0711 11.2579 10.0334C11.1167 9.9957 10.9689 9.98942 10.825 10.015C6.36375 10.81 3 14.8875 3 19.5C3 22.0196 4.00089 24.4359 5.78249 26.2175C7.56408 27.9991 9.98044 29 12.5 29C15.0196 29 17.4359 27.9991 19.2175 26.2175C20.9991 24.4359 22 22.0196 22 19.5V14.5363C23.8521 15.5026 25.911 16.0049 28 16C28.2652 16 28.5196 15.8946 28.7071 15.7071C28.8946 15.5196 29 15.2652 29 15V10C29 9.73478 28.8946 9.48043 28.7071 9.29289C28.5196 9.10536 28.2652 9 28 9ZM27 13.955C25.0458 13.7818 23.1746 13.0844 21.5837 11.9362C21.4342 11.8287 21.2579 11.7646 21.0743 11.7509C20.8906 11.7373 20.7068 11.7746 20.543 11.8587C20.3792 11.9429 20.2418 12.0706 20.146 12.2279C20.0502 12.3852 19.9997 12.5658 20 12.75V19.5C20 21.4891 19.2098 23.3968 17.8033 24.8033C16.3968 26.2098 14.4891 27 12.5 27C10.5109 27 8.60322 26.2098 7.1967 24.8033C5.79018 23.3968 5 21.4891 5 19.5C5 16.2625 7.08 13.3588 10 12.3V15.7587C9.35356 16.1907 8.83005 16.7827 8.4805 17.4771C8.13094 18.1716 7.96727 18.9447 8.00542 19.7213C8.04358 20.4978 8.28226 21.2512 8.69821 21.908C9.11417 22.5648 9.69319 23.1027 10.3789 23.4691C11.0645 23.8356 11.8334 24.0182 12.6107 23.999C13.3879 23.9799 14.1469 23.7598 14.8137 23.36C15.4805 22.9603 16.0324 22.3946 16.4156 21.7181C16.7987 21.0417 17.0001 20.2775 17 19.5V4H20.0625C20.2874 5.76135 21.0906 7.39822 22.3462 8.65379C23.6018 9.90937 25.2386 10.7126 27 10.9375V13.955Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        {/* <hr /> */}
        <p>Copyright © 2024 Bakia House | Powered by Bakia House</p>
      </div>
    </footer>
  );
};

export default Footer;
