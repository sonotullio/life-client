import {useTable} from "@refinedev/core";
import {Box, Stack, Typography} from "@mui/material";
import {AgentCard, CustomButton} from "../components";
import {Add} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import PaginationFooter from "../components/common/PaginationFooter";

export const Agents: React.FC = () => {
    // const { data, isLoading, isError } = useList({
    //     resource: 'users',
    // })

    const {
        tableQueryResult: { data, isLoading, isError },
        current, setCurrent,
        setPageSize,
        pageCount,
    } = useTable({
        resource: 'users',
    });

    const allAgents = data?.data || [];

    const navigate = useNavigate();

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error!</Typography>;

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', mt: 2}}>
            <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
            >
                <Typography fontSize={25} fontWeight={700}>
                    {!allAgents.length ? "There are no Agents" : "All Agents"}
                </Typography>
                <CustomButton
                    title={"Add Agent"}
                    handleClick={() => navigate("/agents/create")}
                    icon={<Add />} />
            </Stack>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2}}>
                {allAgents.map((agent: any) => (
                    <AgentCard key={agent._id} id={agent._id} name={agent.name} email={agent.email} avatar={agent.avatar} noOfProperties={agent.allProperties.length} />
                ))}
            </Box>

            <PaginationFooter current={current} setCurrent={setCurrent} pageCount={pageCount} setPageSize={setPageSize} />
        </Box>
    );
}