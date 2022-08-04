<script>
    export let music_list;
</script>

<h2>List of added music:</h2>
<ul>
    {#each music_list as item}
        <li>
            {item.name}
            (<a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url}
            </a>)
            <p>{JSON.stringify(item)}</p>
        </li>
    {/each}
</ul>
