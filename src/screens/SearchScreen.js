import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";

import useResults from "../hooks/useResults";

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  const [searchApi, results, errMsg] = useResults;

  return (
    <View>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        onTermSubmitt={() => searchApi(search)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
