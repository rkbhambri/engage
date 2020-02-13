import React, { useState } from 'react';
import { Col, Spinner } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';
import { FaMoneyBillAlt } from 'react-icons/fa';
import defaultUserImage from '../../../assets/img/user.svg';
const LeadersData = (props) => {
    const [hasMoreLeaders, setMoreLeaders] = useState(false);

    const loadFunc = (page) => {
        let el = document.getElementById('leaders-data');
        if (el && (el.scrollTop === (el.scrollHeight - el.offsetHeight))) {
            const selected = page;
            const offset = Math.ceil(selected * 10);
            if (!props.isEventsEmpty) {
                setTimeout(() => {
                    props.onGetEvents(offset);
                }, 1000);
            }
        }
        if (props.isEventsEmpty) {
            setMoreLeaders(false);
        }
    };

    const getLeadersData = () => {
        return (
            props.leaders.map((item, index) => {
                return (
                    <Col
                        className="leaders-details mt-2 p-2 border d-flex"
                        key={item.name + index}
                        md={12}
                        sm={12}
                        style={{ borderRadius: '15px', background: '#fff', color: '#696969' }}>
                        <div className="profile-pic">
                            <img
                                src={item.profilePicUrl}
                                className="rounded-circle"
                                alt="not available"
                                style={{ height: '45px', width: '45px' }}
                                onError={(event) => event.target.src = defaultUserImage} />
                        </div>
                        <div className="pl-2 mt-2 w-50">{item.name}</div>
                        <div className="mt-2 ml-4">
                            {item.Money}&nbsp;
                            <FaMoneyBillAlt style={{ fontSize: '22px', paddingBottom: '4px' }} />
                        </div>
                    </Col>
                );
            })
        );
    };

    return (
        <div className="leaders-data mt-3" id="leaders-data">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={hasMoreLeaders}
                loader={<div className="loader text-center" key={0}>{<Spinner />}</div>}>
                {getLeadersData()}
            </InfiniteScroll>
        </div>
    );
}

export default LeadersData;
