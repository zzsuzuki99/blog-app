import React, { Component } from 'react'
import './styles.css'

class Post extends Component {
  render () {
    return (
      <div className="post-inner-content">
        <header className="entry-header page-header">
          <ul className="single-category">
            <li className="cat-item cat-item-38">
              <a href="" title="Posts in this category test post formats.">
                Post Formats
              </a>
            </li>
          </ul>
          <h2 className="entry-title">
            <a href="" rel="bookmark">
              Post Format: Gallery
            </a>
          </h2>

          <div className="entry-meta">
            <span className="posted-on">
              Posted on
              <a href="" rel="bookmark">
                <time
                  className="entry-date published"
                  dateTime="2015-11-12T07:24:14+00:00"
                >
                  November 12, 2015
                </time>
                <time className="updated" dateTime="2015-11-12T14:25:27+00:00">
                  November 12, 2015
                </time>
              </a>
            </span>
            by
            <span className="author vcard">
              <a className="url fn n" href="">
                Aigars
              </a>
            </span>
          </div>
        </header>

        <a href="" title="Post Format: Gallery">
          <img
            width="710"
            height="335"
            src="https://cdn.colorlib.com/activello/wp-content/uploads/sites/10/2015/11/photo-1429734160945-4f85244d6a5a-710x335.jpg"
            className="single-featured wp-post-image"
            alt=""
            srcSet="https://cdn.colorlib.com/activello/wp-content/uploads/sites/10/2015/11/photo-1429734160945-4f85244d6a5a-710x335.jpg 710w, https://cdn.colorlib.com/activello/wp-content/uploads/sites/10/2015/11/photo-1429734160945-4f85244d6a5a-1170x550.jpg 1170w"
            sizes="(max-width: 710px) 100vw, 710px"
          />
        </a>

        <div className="entry-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, sapien nec aliquam viverra, libero elit euismod turpis,
            vel sollicitudin nisi eros eget tortor.
          </p>

          <div className="read-more">
            <a href="" title="Post Format: Gallery">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
