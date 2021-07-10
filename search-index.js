var searchIndex = JSON.parse('{\
"socket2":{"doc":"Utilities for creating and using sockets.","t":[18,3,18,18,18,18,3,18,3,18,3,18,18,3,3,3,18,3,3,18,18,18,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["DGRAM","Domain","ICMPV4","ICMPV6","IPV4","IPV6","MaybeUninitSlice","PACKET","Protocol","RAW","RecvFlags","SEQPACKET","STREAM","SockAddr","SockRef","Socket","TCP","TcpKeepalive","Type","UDP","UNIX","VSOCK","accept","accept4","accept_raw","as_ptr","as_raw_fd","as_socket","as_socket_ipv4","as_socket_ipv6","bind","bind_device","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","broadcast","cloexec","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","connect","connect_timeout","cpu_affinity","deref","deref","deref_mut","device","domain","eq","eq","eq","eq","family","flush","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","for_address","freebind","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from_raw_fd","init","into","into","into","into","into","into","into","into","into","into_raw_fd","ip_transparent","is_end_of_record","is_listener","is_out_of_band","is_truncated","join_multicast_v4","join_multicast_v6","keepalive","keepalive_interval","keepalive_retries","keepalive_time","leave_multicast_v4","leave_multicast_v6","len","linger","listen","local_addr","mark","mss","multicast_hops_v6","multicast_if_v4","multicast_if_v6","multicast_loop_v4","multicast_loop_v6","multicast_ttl_v4","ne","ne","ne","ne","new","new","new","new","new_raw","nodelay","nonblocking","only_v6","out_of_band_inline","pair","pair_raw","peek","peek_from","peer_addr","protocol","read","read_timeout","read_vectored","recv","recv_buffer_size","recv_from","recv_from_vectored","recv_from_vectored_with_flags","recv_from_with_flags","recv_out_of_band","recv_vectored","recv_vectored_with_flags","recv_with_flags","reuse_address","reuse_port","send","send_buffer_size","send_out_of_band","send_to","send_to_vectored","send_to_vectored_with_flags","send_to_with_flags","send_vectored","send_vectored_with_flags","send_with_flags","sendfile","set_broadcast","set_cloexec","set_cpu_affinity","set_freebind","set_ip_transparent","set_keepalive","set_linger","set_mark","set_mss","set_multicast_hops_v6","set_multicast_if_v4","set_multicast_if_v6","set_multicast_loop_v4","set_multicast_loop_v6","set_multicast_ttl_v4","set_nodelay","set_nonblocking","set_nosigpipe","set_only_v6","set_out_of_band_inline","set_read_timeout","set_recv_buffer_size","set_reuse_address","set_reuse_port","set_send_buffer_size","set_tcp_keepalive","set_tcp_user_timeout","set_tos","set_ttl","set_unicast_hops_v6","set_write_timeout","shutdown","take_error","tcp_user_timeout","to_owned","to_owned","to_owned","to_owned","to_owned","tos","try_clone","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","ttl","type","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","unicast_hops_v6","unix","vsock","vsock_address","with_interval","with_retries","with_time","write","write_timeout","write_vectored"],"q":["socket2","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Type corresponding to <code>SOCK_DGRAM</code>.","Specification of the communication domain for a socket.","Protocol corresponding to <code>ICMPv4</code>.","Protocol corresponding to <code>ICMPv6</code>.","Domain for IPv4 communication, corresponding to <code>AF_INET</code>.","Domain for IPv6 communication, corresponding to <code>AF_INET6</code>.","A version of <code>IoSliceMut</code> that allows the buffer to be …","Domain for low-level packet interface, corresponding to …","Protocol specification used for creating sockets via …","Type corresponding to <code>SOCK_RAW</code>.","Flags for incoming messages.","Type corresponding to <code>SOCK_SEQPACKET</code>.","Type corresponding to <code>SOCK_STREAM</code>.","The address of a socket.","A reference to a [<code>Socket</code>] that can be used to configure …","Owned wrapper around a system socket.","Protocol corresponding to <code>TCP</code>.","Configures a socket’s TCP keepalive parameters.","Specification of communication semantics on a socket.","Protocol corresponding to <code>UDP</code>.","Domain for Unix socket communication, corresponding to …","Domain for low-level VSOCK interface, corresponding to …","Accept a new incoming connection from this listener.","Accept a new incoming connection from this listener.","Accept a new incoming connection from this listener.","Returns a raw pointer to the address.","","Returns this address as a <code>SocketAddr</code> if it is in the …","Returns this address as a [<code>SocketAddrV4</code>] if it is in the …","Returns this address as a [<code>SocketAddrV6</code>] if it is in the …","Binds this socket to the specified address.","Sets the value for the <code>SO_BINDTODEVICE</code> option on this …","","","","","","","","","","","","","","","","","","","Get the value of the <code>SO_BROADCAST</code> option for this socket.","Set <code>SOCK_CLOEXEC</code> on the <code>Type</code>.","","","","","","","","","","","Initiate a connection on this socket to the specified …","Initiate a connection on this socket to the specified …","Get the value of the <code>SO_INCOMING_CPU</code> option on this …","","","","Gets the value for the <code>SO_BINDTODEVICE</code> option on this …","Returns the [<code>Domain</code>] of this socket by checking the …","","","","","Returns this address’s family.","","","","","","","","","","","Returns the correct domain for <code>address</code>.","Get the value of the <code>IP_FREEBIND</code> option on this socket.","","","","","","","","","","","","The caller must ensure <code>S</code> is actually a socket.","","","","","","","","","","","","Initialise a <code>SockAddr</code> by calling the function <code>init</code>.","","","","","","","","","","","Get the value of the <code>IP_TRANSPARENT</code> option on this socket.","Check if the message terminates a record.","Returns <code>true</code> if <code>listen(2)</code> was called on this socket by …","Check if the message contains out-of-band data.","Check if the message contains a truncated datagram.","Join a multicast group using <code>IP_ADD_MEMBERSHIP</code> option on …","Join a multicast group using <code>IPV6_ADD_MEMBERSHIP</code> option …","Get the value of the <code>SO_KEEPALIVE</code> option on this socket.","Get the value of the <code>TCP_KEEPINTVL</code> option on this socket.","Get the value of the <code>TCP_KEEPCNT</code> option on this socket.","Get the value of the <code>TCP_KEEPIDLE</code> option on this socket.","Leave a multicast group using <code>IP_DROP_MEMBERSHIP</code> option …","Leave a multicast group using <code>IPV6_DROP_MEMBERSHIP</code> option …","Returns the size of this address in bytes.","Get the value of the <code>SO_LINGER</code> option on this socket.","Mark a socket as ready to accept incoming connection …","Returns the socket address of the local half of this …","Gets the value for the <code>SO_MARK</code> option on this socket.","Gets the value of the <code>TCP_MAXSEG</code> option on this socket.","Get the value of the <code>IPV6_MULTICAST_HOPS</code> option for this …","Get the value of the <code>IP_MULTICAST_IF</code> option for this …","Get the value of the <code>IPV6_MULTICAST_IF</code> option for this …","Get the value of the <code>IP_MULTICAST_LOOP</code> option for this …","Get the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …","Get the value of the <code>IP_MULTICAST_TTL</code> option for this …","","","","","Create a <code>SockAddr</code> from the underlying storage and its …","Creates a new socket and sets common flags.","Creates a new <code>MaybeUninitSlice</code> wrapping a byte slice.","Returns a new, empty set of TCP keepalive parameters.","Creates a new socket ready to be configured.","Get the value of the <code>TCP_NODELAY</code> option on this socket.","Set <code>SOCK_NONBLOCK</code> on the <code>Type</code>.","Get the value of the <code>IPV6_V6ONLY</code> option for this socket.","Get value for the <code>SO_OOBINLINE</code> option on this socket.","Creates a pair of sockets which are connected to each …","Creates a pair of sockets which are connected to each …","Receives data on the socket from the remote adress to …","Receives data from the socket, without removing it from …","Returns the socket address of the remote peer of this …","Returns the [<code>Protocol</code>] of this socket by checking the …","","Get value for the <code>SO_RCVTIMEO</code> option on this socket.","","Receives data on the socket from the remote address to …","Get value for the <code>SO_RCVBUF</code> option on this socket.","Receives data from the socket. On success, returns the …","Receives data from the socket. Returns the amount of …","Identical to <code>recv_from_vectored</code> but allows for …","Identical to <code>recv_from</code> but allows for specification of …","Receives out-of-band (OOB) data on the socket from the …","Receives data on the socket from the remote address to …","Identical to <code>recv_vectored</code> but allows for specification …","Identical to <code>recv</code> but allows for specification of …","Get the value of the <code>SO_REUSEADDR</code> option on this socket.","Get the value of the <code>SO_REUSEPORT</code> option on this socket.","Sends data on the socket to a connected peer.","Get the value of the <code>SO_SNDBUF</code> option on this socket.","Sends out-of-band (OOB) data on the socket to connected …","Sends data on the socket to the given address. On …","Send data to a peer listening on <code>addr</code>. Returns the amount …","Identical to <code>send_to_vectored</code> but allows for …","Identical to <code>send_to</code> but allows for specification of …","Send data to the connected peer. Returns the amount of …","Identical to <code>send_vectored</code> but allows for specification …","Identical to <code>send</code> but allows for specification of …","Copies data between a <code>file</code> and this socket using the …","Set the value of the <code>SO_BROADCAST</code> option for this socket.","Sets <code>CLOEXEC</code> on the socket.","Set value for the <code>SO_INCOMING_CPU</code> option on this socket.","Set value for the <code>IP_FREEBIND</code> option on this socket.","Set the value of the <code>IP_TRANSPARENT</code> option on this socket.","Set value for the <code>SO_KEEPALIVE</code> option on this socket.","Set value for the <code>SO_LINGER</code> option on this socket.","Sets the value for the <code>SO_MARK</code> option on this socket.","Sets the value of the <code>TCP_MAXSEG</code> option on this socket.","Set the value of the <code>IPV6_MULTICAST_HOPS</code> option for this …","Set the value of the <code>IP_MULTICAST_IF</code> option for this …","Set the value of the <code>IPV6_MULTICAST_IF</code> option for this …","Set the value of the <code>IP_MULTICAST_LOOP</code> option for this …","Set the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …","Set the value of the <code>IP_MULTICAST_TTL</code> option for this …","Set the value of the <code>TCP_NODELAY</code> option on this socket.","Moves this TCP stream into or out of nonblocking mode.","Sets <code>SO_NOSIGPIPE</code> on the socket.","Set the value for the <code>IPV6_V6ONLY</code> option on this socket.","Set value for the <code>SO_OOBINLINE</code> option on this socket.","Set value for the <code>SO_RCVTIMEO</code> option on this socket.","Set value for the <code>SO_RCVBUF</code> option on this socket.","Set value for the <code>SO_REUSEADDR</code> option on this socket.","Set value for the <code>SO_REUSEPORT</code> option on this socket.","Set value for the <code>SO_SNDBUF</code> option on this socket.","Set parameters configuring TCP keepalive probes for this …","Set the value of the <code>TCP_USER_TIMEOUT</code> option on this …","Set the value of the <code>IP_TOS</code> option for this socket.","Set the value of the <code>IP_TTL</code> option for this socket.","Set the value for the <code>IPV6_UNICAST_HOPS</code> option on this …","Set value for the <code>SO_SNDTIMEO</code> option on this socket.","Shuts down the read, write, or both halves of this …","Get the value of the <code>SO_ERROR</code> option on this socket.","Get the value of the <code>TCP_USER_TIMEOUT</code> option on this …","","","","","","Get the value of the <code>IP_TOS</code> option for this socket.","Creates a new independently owned handle to the …","","","","","","","","","","","","","","","","","","","Get the value of the <code>IP_TTL</code> option for this socket.","Returns the [<code>Type</code>] of this socket by checking the <code>SO_TYPE</code> …","","","","","","","","","","Get the value of the <code>IPV6_UNICAST_HOPS</code> option for this …","Constructs a <code>SockAddr</code> with the family <code>AF_UNIX</code> and the …","Constructs a <code>SockAddr</code> with the family <code>AF_VSOCK</code> and the …","Returns this address VSOCK CID/port if it is in the …","Set the value of the <code>TCP_KEEPINTVL</code> option. On Windows, …","Set the value of the <code>TCP_KEEPCNT</code> option.","Set the amount of time after which TCP keepalive probes …","","Get value for the <code>SO_SNDTIMEO</code> option on this socket.",""],"i":[1,0,2,2,3,3,0,3,0,1,0,1,1,0,0,0,2,0,0,2,3,3,4,4,4,5,4,5,5,5,4,4,5,4,6,7,3,1,2,8,9,5,4,6,7,3,1,2,8,9,4,1,3,1,2,8,9,3,1,2,8,9,4,4,4,6,7,7,4,4,3,1,2,8,5,4,5,4,6,7,3,1,2,8,9,3,4,5,5,5,5,4,4,4,4,4,4,4,6,6,7,3,3,1,1,2,2,8,9,4,5,5,4,6,7,3,1,2,8,9,4,4,8,4,8,8,4,4,4,4,4,4,4,4,5,4,4,4,4,4,4,4,4,4,4,4,3,1,2,8,5,4,7,9,4,4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,1,2,8,9,4,4,5,4,6,7,3,1,2,8,9,5,4,6,7,3,1,2,8,9,4,4,5,4,6,7,3,1,2,8,9,4,5,5,5,9,9,9,4,4,4],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[],["result",6]],[[["c_int",6]],["result",6]],[[],["result",6]],[[]],[[],["c_int",6]],[[],[["socketaddr",4],["option",4]]],[[],[["socketaddrv4",3],["option",4]]],[[],[["option",4],["socketaddrv6",3]]],[[["sockaddr",3]],["result",6]],[[["option",4]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[["result",6],["bool",15]]],[[],["type",3]],[[],["domain",3]],[[],["type",3]],[[],["protocol",3]],[[],["recvflags",3]],[[],["tcpkeepalive",3]],[[]],[[]],[[]],[[]],[[]],[[["sockaddr",3]],["result",6]],[[["duration",3],["sockaddr",3]],["result",6]],[[],[["usize",15],["result",6]]],[[]],[[]],[[]],[[],[["option",4],["result",6]]],[[],[["domain",3],["result",6]]],[[["domain",3]],["bool",15]],[[["type",3]],["bool",15]],[[["protocol",3]],["bool",15]],[[["recvflags",3]],["bool",15]],[[],["sa_family_t",6]],[[],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["socketaddr",4]],["domain",3]],[[],[["result",6],["bool",15]]],[[["socketaddr",4]],["sockaddr",3]],[[]],[[["socketaddrv6",3]],["sockaddr",3]],[[["socketaddrv4",3]],["sockaddr",3]],[[["unixdatagram",3]],["socket",3]],[[["unixlistener",3]],["socket",3]],[[["unixstream",3]],["socket",3]],[[["udpsocket",3]],["socket",3]],[[["tcplistener",3]],["socket",3]],[[["tcpstream",3]],["socket",3]],[[]],[[]],[[]],[[]],[[]],[[["c_int",6]],["domain",3]],[[["c_int",6]],["type",3]],[[]],[[]],[[["c_int",6]],["protocol",3]],[[]],[[]],[[["c_int",6]],["socket",3]],[[],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["c_int",6]],[[],[["result",6],["bool",15]]],[[],["bool",15]],[[],[["result",6],["bool",15]]],[[],["bool",15]],[[],["bool",15]],[[["ipv4addr",3]],["result",6]],[[["u32",15],["ipv6addr",3]],["result",6]],[[],[["result",6],["bool",15]]],[[],[["duration",3],["result",6]]],[[],[["result",6],["u32",15]]],[[],[["duration",3],["result",6]]],[[["ipv4addr",3]],["result",6]],[[["u32",15],["ipv6addr",3]],["result",6]],[[],["socklen_t",6]],[[],[["result",6],["option",4]]],[[["c_int",6]],["result",6]],[[],[["sockaddr",3],["result",6]]],[[],[["result",6],["u32",15]]],[[],[["result",6],["u32",15]]],[[],[["result",6],["u32",15]]],[[],[["ipv4addr",3],["result",6]]],[[],[["result",6],["u32",15]]],[[],[["result",6],["bool",15]]],[[],[["result",6],["bool",15]]],[[],[["result",6],["u32",15]]],[[["domain",3]],["bool",15]],[[["type",3]],["bool",15]],[[["protocol",3]],["bool",15]],[[["recvflags",3]],["bool",15]],[[["sockaddr_storage",3],["socklen_t",6]],["sockaddr",3]],[[["option",4],["domain",3],["type",3],["protocol",3]],[["socket",3],["result",6]]],[[],["maybeuninitslice",3]],[[],["tcpkeepalive",3]],[[["option",4],["domain",3],["type",3],["protocol",3]],[["socket",3],["result",6]]],[[],[["result",6],["bool",15]]],[[],["type",3]],[[],[["result",6],["bool",15]]],[[],[["result",6],["bool",15]]],[[["option",4],["domain",3],["type",3],["protocol",3]],["result",6]],[[["option",4],["domain",3],["type",3],["protocol",3]],["result",6]],[[],[["usize",15],["result",6]]],[[],["result",6]],[[],[["sockaddr",3],["result",6]]],[[],[["result",6],["option",4]]],[[],[["usize",15],["result",6]]],[[],[["result",6],["option",4]]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[],["result",6]],[[],["result",6]],[[["c_int",6]],["result",6]],[[["c_int",6]],["result",6]],[[],[["usize",15],["result",6]]],[[],["result",6]],[[["c_int",6]],["result",6]],[[["c_int",6]],[["usize",15],["result",6]]],[[],[["result",6],["bool",15]]],[[],[["result",6],["bool",15]]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[["sockaddr",3]],[["usize",15],["result",6]]],[[["sockaddr",3]],[["usize",15],["result",6]]],[[["c_int",6],["sockaddr",3]],[["usize",15],["result",6]]],[[["c_int",6],["sockaddr",3]],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[["c_int",6]],[["usize",15],["result",6]]],[[["c_int",6]],[["usize",15],["result",6]]],[[["usize",15],["nonzerousize",3],["option",4]],[["usize",15],["result",6]]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["usize",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["option",4],["duration",3]],["result",6]],[[["u32",15]],["result",6]],[[["u32",15]],["result",6]],[[["u32",15]],["result",6]],[[["ipv4addr",3]],["result",6]],[[["u32",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["u32",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["option",4],["duration",3]],["result",6]],[[["usize",15]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[["usize",15]],["result",6]],[[["tcpkeepalive",3]],["result",6]],[[["option",4],["duration",3]],["result",6]],[[["u32",15]],["result",6]],[[["u32",15]],["result",6]],[[["u32",15]],["result",6]],[[["option",4],["duration",3]],["result",6]],[[["shutdown",4]],["result",6]],[[],[["result",6],["option",4]]],[[],[["result",6],["option",4]]],[[]],[[]],[[]],[[]],[[]],[[],[["result",6],["u32",15]]],[[],[["socket",3],["result",6]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],[["result",6],["u32",15]]],[[],[["type",3],["result",6]]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],[["result",6],["u32",15]]],[[],[["sockaddr",3],["result",6]]],[[["u32",15]],[["sockaddr",3],["result",6]]],[[],["option",4]],[[["duration",3]]],[[["u32",15]]],[[["duration",3]]],[[],[["usize",15],["result",6]]],[[],[["result",6],["option",4]]],[[],[["usize",15],["result",6]]]],"p":[[3,"Type"],[3,"Protocol"],[3,"Domain"],[3,"Socket"],[3,"SockAddr"],[3,"SockRef"],[3,"MaybeUninitSlice"],[3,"RecvFlags"],[3,"TcpKeepalive"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};