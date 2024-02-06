### **Problem Statement**

The client had a custom operating system built on top of the Debian distro (called VingOS), which ran on an Intel NUC. Any Apple device was able to screen cast onto VingOS seamlessly. The client wanted to extend the same support for Windows too. As this was a commercial product, ensuring user-friendliness and seamless integration with other existing VingOS applications was crucial. Team Ving was looking for the following features:

- Connection (time taken for the screen to appear on the sink after clicking the connect button in Windows) time < 4 secs.
- Instant Disconnection.
- Ability to stream high quality audio and video (1080p), esp on large screens.
- Zero jitter & lag < 100ms.
- Support Screen Extention (use VingOS as other screen rather than casting).
- Support Multiple Screens with indeference to Aiplay or Miracast.
- Should be able to connect to the internet using Wifi and Ethernet while screen casting.
- Graceful disconnect in all the cases.

### **Screencasting Interface in Windows ?**

Windows has out-of-box support for casting screens. It implements the [Miracast](https://www.wi-fi.org/discover-wi-fi/miracast) specification. Great! So all we needed was to have Miracast complaint sink.
Source: The device whose screen is being casted.
Sink: The device where the screen is casted to.

There are two Linux compatible open source options (with suitable licences):

- [Lazycast](https://github.com/homeworkc/lazycast) -- Written in Python and C, easier to understand and change, but specifically made for Raspbian.
- [Miraclecast](https://github.com/albfan/miraclecast) -- Written completely in C, the more rigorous and well-written of the two.

To screen cast as a Windows user, you need to follow the steps below:

- Press (Win + K)
- Select the screen with cursor or arrow keys
- Click on "Connect" button

After a successful connection, Windows shows the following options:

- Duplicate (Default)
- Extend
- Second Screen only

Windows as per Miracast Specification supports complete Wifid connection. Additionally, it also supports [MS-MICE](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-mice/9598ca72-d937-466c-95f6-70401bb10bdb) (over infrastructure). User can't really see any difference between two as the interface to connect remains the same. Miraclecast had no support for MICE, but Lazycast has. To understand what Miraclecast and Lazycast have to offer, let's explore the Linux components that are important.

### **How does screencasting work ft. Miracast Specification**

Screen casting can be broken down into the following stages:

- **Establishing connection** : Includes discovery of a Linux device on the Windows Miracast Interface (done through the P2P protocol), followed by connection between devices (either P2P or MS-MICE). After this phase is over, two devices have a duplex socket connection and can therefore exchange data. An [RTSP Session](https://en.wikipedia.org/wiki/Real_Time_Streaming_Protocol) is started.
- **RTSP Session (Capability Negotiation)**: Source and Sink tell each other their capabilities, e.g., bitrate, resolution, video and audio codecs, expected latency, etc. A full list can be found in the Miracast specification. After this phase is over, either the session is terminated because of incompatibility or [RTP Streaming](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol) has started on the agreed upon (7236 by default) port.
- **RTP Session** : This implies Windows has started streaming MPEG2 packets. Many media players support capturing and displaying RTP streams over a port, e.g., VLC. Adjustments to improve the decoding latency, pixelation, and network buffering have to be made at the media player level. Gstreamer is a popular choice (either write piplines using gst-launch or write your own code to custom-build the player).

Only the first stage varies based on whether we employ P2P or MS-MICE. We will delve deeper into the first stage in another post.

To offer multiple screen casting sessions concurrently, we should be able to establish multiple connections without interfering with the Airplay module. The connection in which we are interested has to happen over WiFi (otherwise it would not be user-friendly). Most modern WiFi cards come with support for P2P connections, allowing devices to securely connect to each other over WiFi without the need for a router, that is, in a single hop.

To find out the support from the wificard, check the output of `iw phy` (linux terminal). Following is one excerpt of output from my terminal:

```python
        Supported interface modes:
                 * IBSS
                 * managed
                 * AP
                 * AP/VLAN
                 * monitor
                 * P2P-client
                 * P2P-GO
                 * P2P-device

```

The above tells us about the supported modes. Normally, when we are connected to a WiFi network, we are in `managed` mode. We need a P2P-client or P2P-GO for MS-MICE of WiFid. But can Wifi cards be in two modes simultaneously? Yes, at least in most cases. Following excerpt from `iw phy` shows which (and how many) modes are supported together.

```python
    valid interface combinations:
        * #{ managed } <= 1, #{ AP, P2P-client, P2P-GO } <= 1, #{ P2P-device } <= 1,
        total <= 3, #channels <= 2
```

The above snippet tells us that we can be in `managed` mode and `(P2P-client or P2-GO)` and `P2P device` at the same time. But how is it possible? That happens using the `Network Namespace`.

But wait, what if Airplay interferes with our work? How do we make sure it is unaffected and can work in parallel? How can we connect multiple Windows devices? And what even is P2P? We will cover all of it in our next blog.
