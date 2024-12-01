"use client";

import React from "react";
import Link from "next/link";

const BlogSidebar: React.FC = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <h3 className="widget-title">Search Now</h3>
          <div className="post-wrap">
            <form className="search-form">
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>
              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-peru-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>
          <div className="post-wrap">
            <div className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/img/blog-details/popular-posts-1.png)`,
                  }}
                ></span>
              </Link>
              <div className="info">
                <span className="time">April 20, 2020</span>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    250+ Medical Tips We just had to share
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>

            <div className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/img/blog-details/popular-posts-2.png)`,
                  }}
                ></span>
              </Link>
              <div className="info">
                <span className="time">April 21, 2020</span>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    What Can I Do To Prevent Myself & prevent Disease
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>

            <div className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/img/blog-details/popular-posts-3.png)`,
                  }}
                ></span>
              </Link>
              <div className="info">
                <span className="time">April 22, 2020</span>
                <h4 className="title usmall">
                  <Link href="/blog/details" className="thumb">
                    Blackpool Polices Hunt For David Schwinger
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>

            <div className="item">
              <Link href="/blog/details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/img/blog-details/popular-posts-4.png)`,
                  }}
                ></span>
              </Link>
              <div className="info">
                <span className="time">April 23, 2020</span>
                <h4 className="title usmall">
                  <Link href="/blog/details">
                    CCU For Emergency Services & Medical support
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Archives</h3>
          <div className="post-wrap">
            <ul>
              <li>
                <a href="#">
                  January <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  February <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  March <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  April <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  May <span>2020</span>
                </a>
              </li>
              <li>
                <a href="#">
                  June <span>2020</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>
          <div className="post-wrap">
            <ul>
              <li>
                <Link href="/blog">
                  Antibiotic <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Diseases <span>(20)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Health Care <span>(10)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Heart Rate <span>(12)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Hospital <span>(16)</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Infectious <span>(17)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>
          <div className="post-wrap">
            <div className="tagcloud">
              <Link href="/blog">Antibiotic (3)</Link>
              <Link href="/blog">Diseases (3)</Link>
              <Link href="/blog">Heart (2)</Link>
              <Link href="/blog">Health (2)</Link>
              <Link href="/blog">Hospital (1)</Link>
              <Link href="/blog">Infectious </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
