import React, { Component } from "react";
import menu from "./svg/open-menu.svg";
import play from "./svg/play-button.svg";
import external from "./svg/external-link-symbol.svg";
import pause from "./svg/pause.svg";
import IntervalPlayerStyles from "./IntervalPlayer.scss";
import { Howl, Howler } from "howler";
class IntervalPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      isPlaying: false,
      isPlayButtonTransitioning: false,
      buttonAnimation: "",
      thumbnailSrc: this.props.data.songs[0].thumbnail,
      currentSongIndex: 0,
      url: this.props.data.songs[0].url,
    };
  }

  handleShow = () => {
    this.setState({ isShowing: true });
  };

  handleHide = () => {
    this.setState({ isShowing: false });
  };

  handleExternalClick = () => {
    window.open(this.state.url);
  };

  handlePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      if (this.state.isPlaying) {
        this.props.playSound(this.state.currentSongIndex);
      } else {
        this.props.pauseSound();
      }
    });
    this.props.pauseAllOtherPlayers(this.props.index);
  };

  handleMenuClick = () => {
    var newState = this.state.buttonAnimation ? "" : "animation";
    this.setState({
      buttonAnimation: newState,
      thumbnailAnimation: newState,
      menuAnimation: newState,
    });
  };

  pausePlayer = () => {
    this.setState({ isPlaying: false });
  };

  setSong = (songIndex) => {
    var { thumbnail, url, file } = this.props.data.songs[songIndex];
    this.setState({
      thumbnailSrc: thumbnail,
      currentSongIndex: songIndex,
      url: url,
    });
    var newState = "";
    this.setState({
      buttonAnimation: newState,
      thumbnailAnimation: newState,
      menuAnimation: newState,
      isPlaying: false,
    });
    this.props.pauseSound();
  };
  render() {
    console.log(this.state.thumbnailSrc);
    return (
      <div className="player-container">
        <div className="player-title">{this.props.data.intervalName}</div>
        <div
          className="player-thumbnail-container"
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
        >
          <img
            className={`player-thumbnail ${this.state.thumbnailAnimation}`}
            src={this.state.thumbnailSrc}
          ></img>

          {this.state.isPlaying ? (
            <img
              className="pause-button"
              src={pause}
              style={{ opacity: this.state.isShowing ? 1 : 0 }}
              onClick={this.handlePlay}
            />
          ) : (
            <img
              className="play-button"
              src={play}
              style={{ opacity: this.state.isShowing ? 1 : 0 }}
              onClick={this.handlePlay}
            />
          )}
        </div>
        <div className={`player-menu ${this.state.menuAnimation}`}>
          {this.props.data.songs.map((eachSong, i) => {
            return (
              <div
                onClick={() => {
                  this.setSong(i);
                }}
                className="player-menu-option"
                key={i}
              >
                {eachSong.title}
              </div>
            );
          })}
        </div>
        <div className="player-control-container">
          <div className="control-button-outer" onClick={this.handleMenuClick}>
            <img
              className={`control-button ${this.state.buttonAnimation}`}
              src={menu}
            />
          </div>
          <img className="player-thumbnail-placeholder" />

          <div className="control-button-outer">
            <img
              className="control-button"
              src={external}
              onClick={this.handleExternalClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default IntervalPlayer;
